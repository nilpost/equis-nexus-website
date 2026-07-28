"use client";

import { FormEvent, useRef, useState } from "react";
import type { getCopy } from "../i18n";

type LoginCopy = ReturnType<typeof getCopy>["login"];

export function LoginForm({ content }: { content: LoginCopy }) {
  const [email, setEmail] = useState("");
  const [accessCode, setAccessCode] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const messageRef = useRef<HTMLDivElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAccessCode("");
    setShowMessage(true);
    requestAnimationFrame(() => messageRef.current?.focus());
  }

  return (
    <div className="login-panel">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="investor-email">{content.email}</label>
          <input
            id="investor-email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={content.emailPlaceholder}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="investor-code">{content.code}</label>
          <input
            id="investor-code"
            name="access-code"
            type="text"
            autoComplete="off"
            value={accessCode}
            onChange={(event) => setAccessCode(event.target.value)}
            placeholder={content.codePlaceholder}
            required
          />
          <small>{content.privacy}</small>
        </div>
        <button type="submit">
          {content.continue}
          <span aria-hidden="true">→</span>
        </button>
      </form>

      {showMessage ? (
        <div
          className="portal-message"
          ref={messageRef}
          role="status"
          aria-live="polite"
          tabIndex={-1}
        >
          <span aria-hidden="true">{content.notice}</span>
          <p>{content.message}</p>
          <a href="mailto:icontact@equis-nexus.com?subject=Investor%20brief%20request">
            {content.request}
          </a>
        </div>
      ) : null}
    </div>
  );
}
