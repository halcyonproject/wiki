import React, { useState, useEffect } from 'react';
import styles from './DeviceMaintainers.module.css';

const GITHUB_ICON = (
  <svg viewBox="0 0 24 24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const GITLAB_ICON = (
  <svg viewBox="0 0 24 24">
    <path d="m23.6 9.587-1.02-3.14a.972.972 0 0 0-.367-.478.995.995 0 0 0-1.196.06.97.97 0 0 0-.317.514l-1.56 4.792H4.854L3.295 6.535a.97.97 0 0 0-.317-.514.996.996 0 0 0-1.196-.06.972.972 0 0 0-.367.478L.395 9.587a1.455 1.455 0 0 0 .528 1.627l10.54 7.658a.908.908 0 0 0 1.074 0l10.535-7.658a1.455 1.455 0 0 0 .528-1.627" />
  </svg>
);

function MaintainerCard({ maintainer }) {
  const [imgError, setImgError] = useState(false);
  const cleanName = (maintainer.name || maintainer.username || 'Maintainer').trim();
  const initial = cleanName.charAt(0).toUpperCase();
  const avatarUrl = maintainer.github
    ? `https://github.com/${maintainer.github.trim()}.png?size=120`
    : null;

  return (
    <div className={styles.card}>
      <div className={styles.avatarContainer}>
        {avatarUrl && !imgError ? (
          <img
            src={avatarUrl}
            alt={cleanName}
            className={styles.avatar}
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={styles.avatarFallback}>{initial}</div>
        )}
      </div>

      <h4 className={styles.name}>{cleanName}</h4>

      {maintainer.username && (
        <span className={styles.handle}>
          @{maintainer.username.replace('@', '').trim()}
        </span>
      )}

      <div className={styles.links}>
        {maintainer.github && (
          <a
            href={`https://github.com/${maintainer.github.trim()}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.tonalButton}
            title={`GitHub (@${maintainer.github.trim()})`}
            aria-label={`GitHub profile of ${cleanName}`}
          >
            {GITHUB_ICON}
          </a>
        )}

        {maintainer.gitlab && (
          <a
            href={`https://gitlab.com/${maintainer.gitlab.trim()}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.tonalButton}
            title={`GitLab (@${maintainer.gitlab.trim()})`}
            aria-label={`GitLab profile of ${cleanName}`}
          >
            {GITLAB_ICON}
          </a>
        )}
      </div>
    </div>
  );
}

export default function DeviceMaintainers() {
  const [maintainers, setMaintainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMaintainers = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('https://canna.hlcyn.org/api/v2/maintainers');
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
      const data = await res.json();
      const list = Array.isArray(data?.data) ? data.data : [];
      // Filter for active maintainers and sort alphabetically by name
      const activeList = list
        .filter((m) => m.status === 'active')
        .sort((a, b) => (a.name || a.username || '').localeCompare(b.name || b.username || ''));
      setMaintainers(activeList);
    } catch (err) {
      console.error('Failed to load maintainers:', err);
      setError('Unable to load device maintainers list at the moment.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMaintainers();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <div className={styles.countChip}>
          <span className={styles.statusDot} />
          <span>{loading ? 'Loading...' : `${maintainers.length} Active Maintainers`}</span>
        </div>
      </div>

      {loading ? (
        <div className={styles.grid}>
          {Array.from({ length: 8 }).map((_, idx) => (
            <div key={idx} className={styles.skeletonCard} />
          ))}
        </div>
      ) : error ? (
        <div className={styles.errorCard}>
          <p>{error}</p>
          <button onClick={fetchMaintainers} className={styles.retryButton}>
            Retry
          </button>
        </div>
      ) : (
        <div className={styles.grid}>
          {maintainers.map((m) => (
            <MaintainerCard key={m.userid || m.username || m.github} maintainer={m} />
          ))}
        </div>
      )}
    </div>
  );
}
