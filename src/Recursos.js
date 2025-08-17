import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const resources = [
  { id: 1, title: 'Playlist recomendada', img: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=800&q=80&auto=format&fit=crop' },
  { id: 2, title: 'Curso gratuito', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80&auto=format&fit=crop' },
  { id: 3, title: 'Descargas', img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80&auto=format&fit=crop' },
  { id: 4, title: 'Ebook útil', img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&q=80&auto=format&fit=crop' },
  { id: 5, title: 'Canal de YouTube', img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&q=80&auto=format&fit=crop' },
  { id: 6, title: 'Plantillas', img: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=800&q=80&auto=format&fit=crop' },
  { id: 7, title: 'Herramientas', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80&auto=format&fit=crop' },
  { id: 8, title: 'Podcast', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop' },
  { id: 9, title: 'Lista de reproducción avanzada', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80&auto=format&fit=crop' }
];

export default function Recursos(){
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(resources.length / itemsPerPage);

  const start = (page - 1) * itemsPerPage;
  const pageItems = resources.slice(start, start + itemsPerPage);

  const paginationRef = useRef(null);

  useEffect(() => {
    // center the active page button inside the pagination container on change
    const container = paginationRef.current;
    if (!container) return;
    const active = container.querySelector('.page-btn.active');
    if (active && typeof active.scrollIntoView === 'function') {
      active.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [page]);

  // compute a sliding window of two pages to display
  const visiblePages = (() => {
    if (totalPages <= 2) return Array.from({ length: totalPages }, (_, i) => i + 1);
    // if we're at the last page, show last two
    if (page >= totalPages) return [Math.max(1, totalPages - 1), totalPages];
    // otherwise show current and next
    return [page, Math.min(totalPages, page + 1)];
  })();

  return (
    <div className="page">
      <div className="card recursos-card">
        <h2 className="text-2xl font-semibold mb-4">Recursos</h2>
        <p className="text-gray-600 mb-6 lead">Aquí puedes enlazar a tus recursos: playlists, descargas, cursos o redes.</p>

        <div className="resource-grid">
          {pageItems.map(r => (
            <div className="resource-card" key={r.id}>
              <img src={r.img} alt={r.title} className="resource-img" />
              <h3 className="resource-title">{r.title}</h3>
              <div className="resource-actions">
                <a href="#" className="btn">Ir</a>
              </div>
            </div>
          ))}
        </div>

        <div ref={paginationRef} className="pagination" role="navigation" aria-label="Paginación recursos">
          <button className="page-btn" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} aria-label="Página anterior">Prev</button>
          {visiblePages.map(pn => (
            <button
              key={pn}
              className={`page-btn ${page === pn ? 'active' : ''}`}
              onClick={() => setPage(pn)}
              aria-current={page === pn ? 'page' : undefined}
            >{pn}</button>
          ))}
          <button className="page-btn" onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages} aria-label="Página siguiente">Next</button>
        </div>

        <div className="mt-6">
          <Link to="/" className="menu-link btn">Volver</Link>
        </div>
      </div>
    </div>
  )
}
