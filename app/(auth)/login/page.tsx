"use client";

import Link from "next/link";
import "../../styles/main.css";
import "../../styles/auth.css";

export default function LoginPage() {
  return (
    <div className="page-center">
      <div className="auth-card">
        <h1 className="auth-title">Connexion</h1>

        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="exemple@email.com"
              required
            />
          </div>

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
            Se connecter
          </button>
        </form>

        <div className="auth-footer">
          <span>Pas encore de compte ?</span>
          <Link href="/register" className="link">
            Créer un compte
          </Link>
        </div>
      </div>
    </div>
  );
}
