        import React, { useEffect, useState } from "react";
        import { Link, useLocation, useNavigate } from "react-router-dom";
        import logo from "../assets/Entreprise_image/logo-removebg-preview.png";
import { FaBars, FaTimes, FaUserCircle, FaHeart } from "react-icons/fa";
        import { useLanguage } from "../context/LanguageContext";
import { API_URL, clearAuthUser, getAuthUser } from "../lib/auth";
import { useFavorites } from "../context/FavoritesContext";
import { AnnonceMock } from "../lib/Mock";
        const Navbar: React.FC = () => {
        const { language, setLanguage, t } = useLanguage();
        const { favoriteIds } = useFavorites();
        const [open, setOpen] = useState(false);
        const [user, setUser] = useState(getAuthUser());
        const [change, setChange] = useState(false);
        const [msg, setMsg] = useState("");
        const loc = useLocation();
        const nav = useNavigate();
        useEffect(() => {
            const syncUser = () => setUser(getAuthUser());
            window.addEventListener("bikoan-auth-changed", syncUser);
            window.addEventListener("storage", syncUser);
            return () => {
            window.removeEventListener("bikoan-auth-changed", syncUser);
            window.removeEventListener("storage", syncUser);
            };
        }, []);
        const links = [
            ["/home", t.nav.home],
            ["/nosproduit", t.nav.nosProduits],
            ["/apropos", t.nav.apropos],
            ["/contact", t.nav.contact],
        ];
        const password = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            const r = await fetch(`${API_URL}?action=change-password`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: user?.email,
                old_password: f.get("old_password"),
                new_password: f.get("new_password"),
            }),
            });
            const d = await r.json();
            setMsg(d.message);
            if (r.ok) {
            setChange(false);
            e.currentTarget.reset();
            }
        };
        return (
            <header className="bg-green-500 text-white fixed top-0 w-full z-50 shadow-md">
            <div className="flex items-center justify-between px-4 sm:px-6 py-3">
                <Link to="/home">
                <img
                    className="h-10 w-auto max-w-[180px] object-contain"
                    src={logo}
                    alt="Bikoan logo"
                />
                </Link>
                <nav className="hidden md:flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                <button onClick={() => setOpen(open ? false : true)} className="relative rounded-xl bg-white/15 px-3 py-2 transition hover:bg-white/25" aria-label="Favoris">
                    <FaHeart className="text-red-200" />
                    {favoriteIds.length > 0 && <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[11px] font-bold">{favoriteIds.length}</span>}
                </button>
                <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value as "fr" | "en")}
                    aria-label={t.home.languageLabel}
                    className="cursor-pointer rounded-xl border border-white/40 bg-white px-3 py-2 text-sm font-semibold text-green-800 shadow-sm outline-none transition hover:bg-green-50"
                >
                    <option value="fr">{t.home.languageFr}</option>
                    <option value="en">{t.home.languageEn}</option>
                </select>
                </div>
                {open && favoriteIds.length > 0 && (
                    <div className="absolute right-44 top-16 z-50 w-72 rounded-2xl bg-white p-4 text-gray-800 shadow-2xl ring-1 ring-black/5">
                        <p className="mb-3 font-bold text-green-700">{language === 'fr' ? 'Mes favoris' : 'My favourites'}</p>
                        <div className="space-y-2">
                            {favoriteIds.map(id => { const product = AnnonceMock.find(item => item.id === id); return product ? <Link key={id} to={`/nosproduit/${id}`} onClick={() => setOpen(false)} className="flex items-center gap-3 rounded-xl p-2 transition hover:bg-green-50"><img src={product.images[0]} alt="" className="h-10 w-10 rounded-lg object-cover" /><span className="text-sm font-medium">{language === 'fr' ? product.titre : product.titreEn}</span></Link> : null })}
                        </div>
                    </div>
                )}
                {links.map(([to, label]) => (
                    <Link
                    key={to}
                    to={to}
                    className={`rounded-lg px-2 py-1 font-medium ${loc.pathname === to ? "bg-green-700" : ""}`}
                    >
                    {label}
                    </Link>
                ))}
                {user ? (
                    <div className="relative">
                    <button
                        onClick={() => setOpen(!open)}
                        className="flex items-center gap-1 bg-white/20 rounded-lg px-3 py-1.5"
                    >
                        <FaUserCircle />
                        <span>{user.name}</span>
                    </button>
                    {open && (
                        <div className="absolute right-0 mt-2 w-64 bg-white text-gray-800 rounded-xl shadow-xl p-4">
                        <p className="font-bold">{user.name}</p>
                        <p className="text-sm">{user.role}</p>
                        <p className="text-sm break-all">{user.email}</p>
                        <button
                            onClick={() => setChange(!change)}
                            className="text-green-700 text-sm mt-3 underline"
                        >
                            Change password
                        </button>
                        {change && (
                            <form onSubmit={password} className="mt-3 space-y-2">
                            <input
                                name="old_password"
                                type="password"
                                required
                                placeholder="Old password"
                                className="w-full border rounded px-2 py-1"
                            />
                            <input
                                name="new_password"
                                type="password"
                                required
                                placeholder="New password"
                                className="w-full border rounded px-2 py-1"
                            />
                            <button className="bg-green-600 text-white rounded px-3 py-1 text-sm">
                                Save
                            </button>
                            </form>
                        )}
                        {msg && <p className="text-xs mt-2">{msg}</p>}
                        <button
                            onClick={() => {
                            clearAuthUser();
                            setUser(null);
                            nav("/connexion");
                            }}
                            className="text-red-600 text-sm mt-3"
                        >
                            Log out
                        </button>
                        </div>
                    )}
                    </div>
                ) : (
                    <Link
                    to="/connexion"
                    className="flex items-center gap-1 bg-white/20 rounded-lg px-3 py-1.5"
                    >
                    <FaUserCircle />
                    {t.nav.connexion}
                    </Link>
                )}
                </nav>
                <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
                {open ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            </header>
        );
        };
        export default Navbar;
