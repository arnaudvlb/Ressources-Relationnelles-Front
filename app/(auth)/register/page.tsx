"use client";

import "../../global.css";
import "../../../components/AuthForm/AuthForm.css";

export default function RegisterPage() {
  return (
    <div className="page-center">
      <div className="auth-card">
        <h1 className="auth-title">Créer un compte</h1>

        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="firstName">Prénom</label>
            <input
              type="text"
              id="firstName"
              placeholder="Prénom"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Nom</label>
            <input
              type="text"
              id="lastName"
              placeholder="Nom"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="username">Pseudo</label>
            <input
              type="text"
              id="username"
              placeholder="Pseudo"
              required
            />
          </div>

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
            <label htmlFor="phone">Téléphone</label>
            <input
              type="tel"
              id="phone"
              placeholder="06 12 34 56 78"
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
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
  
}
