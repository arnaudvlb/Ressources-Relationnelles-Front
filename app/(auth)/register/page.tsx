"use client";

import Link from "next/link";
import "../../styles/main.css";
import "../../styles/auth.css";

export default function RegisterPage() {
  return (
    <div className="page-center">
      <div className="auth-card">
        <h1 className="auth-title">Créer un compte</h1>

        <form className="auth-form">
          {/* Nom et Prénom */}
          <div className="form-group">
            <label htmlFor="firstName">Prénom</label>
            <input
              type="text"
              id="firstName"
              placeholder="Votre prénom"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Nom</label>
            <input
              type="text"
              id="lastName"
              placeholder="Votre nom"
              required
            />
          </div>

          {/* Pseudo */}
          <div className="form-group">
            <label htmlFor="username">Pseudo</label>
            <input
              type="text"
              id="username"
              placeholder="Votre pseudo"
              required
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="exemple@email.com"
              required
            />
          </div>

          {/* Téléphone */}
          <div className="form-group">
            <label htmlFor="phone">Téléphone</label>
            <input
              type="tel"
              id="phone"
              placeholder="06 12 34 56 78"
            />
          </div>

          {/* Mot de passe */}
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" className="btn-primary">
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
}
