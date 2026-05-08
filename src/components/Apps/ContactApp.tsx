import { useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane, FaTwitter } from 'react-icons/fa';
import { profile } from '../../data/profile';
import { useClock } from '../../hooks/useClock';
import { copy } from '../../i18n';
import { useDesktopStore } from '../../store/desktopStore';

interface FormState {
  name: string;
  email: string;
  topic: 'hire' | 'collab' | 'chat';
  message: string;
}

const initialForm: FormState = {
  name: '',
  email: '',
  topic: 'hire',
  message: '',
};

export function ContactApp() {
  const language = useDesktopStore((state) => state.language);
  const t = copy[language].contact;
  const clock = useClock(undefined, copy[language].locale);
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const addToast = useDesktopStore((state) => state.addToast);
  const avatarUrl = profile.contactAvatarUrl || profile.avatarUrl;

  const errors = useMemo(() => validate(form, t.errors), [form, t.errors]);
  const hasErrors = Object.values(errors).some(Boolean);

  const updateField = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setForm((current) => ({ ...current, [field]: value }));
    setSubmitted(false);
  };

  const copyEmail = async () => {
    await navigator.clipboard?.writeText(profile.email);
    addToast({ title: t.emailCopied, message: profile.email });
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    if (hasErrors) return;

    setIsSending(true);
    window.setTimeout(() => {
      setIsSending(false);
      setForm(initialForm);
      setSubmitted(false);
      window.dispatchEvent(new Event('portfolio-confetti'));
      addToast({ title: t.sentTitle, message: t.sentMessage });
    }, 900);
  };

  return (
    <section className="contactApp appSurface">
      <aside className="contactCard">
        <div className="miniAvatar" aria-hidden="true">
          {avatarUrl ? <img src={avatarUrl} alt="" /> : profile.name.slice(0, 1).toUpperCase()}
        </div>
        <h2>{profile.name}</h2>
        <p>{t.open}</p>

        <div className="contactLinks">
          <button type="button" onClick={copyEmail} title={profile.email}>
            <FaEnvelope aria-hidden="true" />
            <span>Email</span>
          </button>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" title={profile.socials.linkedin}>
            <FaLinkedin aria-hidden="true" />
            <span>/in/serhii-dev</span>
          </a>
          <a href={profile.socials.github} target="_blank" rel="noreferrer" title={profile.socials.github}>
            <FaGithub aria-hidden="true" />
            <span>/serhiy23471</span>
          </a>
          <a href={profile.socials.twitter} target="_blank" rel="noreferrer" title={profile.socials.twitter}>
            <FaTwitter aria-hidden="true" />
            <span>{profile.handle}</span>
          </a>
        </div>

        <div className="timezoneBadge">
          <span aria-hidden="true" />
          {t.timezone} {clock}
        </div>
      </aside>

      <form className={`contactForm ${isSending ? 'isSending' : ''}`} onSubmit={submit} noValidate>
        <label>
          <span>{t.name}</span>
          <input value={form.name} onChange={(event) => updateField('name', event.target.value)} placeholder={t.name} />
          {submitted && errors.name && <small>{errors.name}</small>}
        </label>

        <label>
          <span>{t.email}</span>
          <input value={form.email} onChange={(event) => updateField('email', event.target.value)} placeholder={t.email} type="email" />
          {submitted && errors.email && <small>{errors.email}</small>}
        </label>

        <label>
          <span>{t.topic}</span>
          <select value={form.topic} onChange={(event) => updateField('topic', event.target.value as FormState['topic'])}>
            <option value="hire">{t.options[0]}</option>
            <option value="collab">{t.options[1]}</option>
            <option value="chat">{t.options[2]}</option>
          </select>
        </label>

        <label>
          <span>{t.message}</span>
          <textarea value={form.message} onChange={(event) => updateField('message', event.target.value)} placeholder={t.messagePlaceholder} rows={4} />
          {submitted && errors.message && <small>{errors.message}</small>}
        </label>

        <button className="primaryButton sendButton" type="submit" disabled={isSending}>
          <FaPaperPlane className={isSending ? 'isFlying' : ''} aria-hidden="true" />
          {isSending ? t.sending : t.send}
        </button>
      </form>
    </section>
  );
}

function validate(form: FormState, errors: Record<'name' | 'email' | 'message', string>) {
  return {
    name: form.name.trim().length < 2 ? errors.name : '',
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : errors.email,
    message: form.message.trim().length < 8 ? errors.message : '',
  };
}
