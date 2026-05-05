import React, { useState } from 'react';

const EVENTS = [
  { id: 1, emoji: '🎵', chain: 'Ethereum · ERC-721', title: 'Crypto Beats Festival 2025', desc: '48 artists, 3 stages. Fully on-chain music festival with POAP NFT for every attendee.', price: '0.08 ETH', usd: '≈ $284', attendees: '2,340', live: true, bg: 'linear-gradient(135deg,#dbeafe,#bfdbfe)' },
  { id: 2, emoji: '🤖', chain: 'Polygon · ERC-1155', title: 'DeFi Summit: Next Gen', desc: 'Keynotes from Uniswap, Aave & Compound. Exclusive NFT pass includes networking.', price: '150 MATIC', usd: '≈ $95', attendees: '890', live: false, bg: 'linear-gradient(135deg,#fce7f3,#fbcfe8)' },
  { id: 3, emoji: '🎮', chain: 'Solana · SPL Token', title: 'Web3 Gaming Expo', desc: 'Play-to-earn, metaverse & NFT gaming. Demo unreleased titles. $100K prize pool.', price: '2 SOL', usd: '≈ $180', attendees: '5,120', live: false, bg: 'linear-gradient(135deg,#fff1e6,#fed7aa)' },
  { id: 4, emoji: '🎨', chain: 'Ethereum · ERC-721', title: 'NFT Art Week NYC', desc: 'Gallery drops, live minting sessions & meet-and-greets with top digital artists.', price: '0.12 ETH', usd: '≈ $428', attendees: '3,780', live: true, bg: 'linear-gradient(135deg,#e0f7f4,#99f6e4)' },
  { id: 5, emoji: '⚡', chain: 'Avalanche · ARC-20', title: 'Avalanche DevCon', desc: 'Hackathons, workshops & keynotes for builders on Avalanche. $500K in prizes.', price: '5 AVAX', usd: '≈ $110', attendees: '1,240', live: false, bg: 'linear-gradient(135deg,#eef2ff,#c7d2fe)' },
  { id: 6, emoji: '🌐', chain: 'BNB Chain · BEP-20', title: 'Metaverse Fashion Week', desc: 'Top brands debut wearable NFT collections in an immersive metaverse experience.', price: '0.5 BNB', usd: '≈ $150', attendees: '8,900', live: false, bg: 'linear-gradient(135deg,#fdf4ff,#e9d5ff)' },
];

const EventCard = ({ event }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff', border: `1.5px solid ${hovered ? 'var(--lblue)' : 'var(--border)'}`,
        borderRadius: 18, overflow: 'hidden', cursor: 'pointer',
        transform: hovered ? 'translateY(-6px)' : 'none',
        boxShadow: hovered ? '0 20px 48px rgba(59,130,246,0.15)' : '0 2px 12px rgba(59,130,246,0.06)',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ height: 156, background: event.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 46, position: 'relative' }}>
        {event.emoji}
        {event.live && (
          <div style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(239,68,68,0.1)', color: '#dc2626', border: '1px solid rgba(239,68,68,0.3)', fontSize: 9, letterSpacing: '1.5px', padding: '5px 12px', borderRadius: 100, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 5 }}>
            <div style={{ width: 5, height: 5, background: '#dc2626', borderRadius: '50%', animation: 'blink 1s infinite' }} />Live
          </div>
        )}
      </div>
      <div style={{ padding: 20 }}>
        <div style={{ fontSize: 10, color: 'var(--blue)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 7, fontWeight: 600 }}>{event.chain}</div>
        <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 15, fontWeight: 700, color: 'var(--navy)', marginBottom: 7, lineHeight: 1.35 }}>{event.title}</div>
        <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.75, marginBottom: 15 }}>{event.desc}</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1.5px solid #eef2ff', paddingTop: 13 }}>
          <div>
            <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 15, color: 'var(--navy)', fontWeight: 800 }}>{event.price}</div>
            <div style={{ fontSize: 10, color: 'var(--muted)' }}>{event.usd}</div>
          </div>
          <div style={{ fontSize: 11, color: 'var(--muted)' }}>👥 {event.attendees}</div>
        </div>
        <button style={{
          marginTop: 12, width: '100%', padding: 10,
          border: `1.5px solid ${hovered ? 'transparent' : 'var(--border)'}`,
          background: hovered ? 'linear-gradient(135deg, var(--blue), var(--navy))' : 'transparent',
          color: hovered ? '#fff' : 'var(--blue)',
          borderRadius: 50, fontFamily: 'Syne, sans-serif', fontWeight: 700,
          fontSize: 11, letterSpacing: '0.5px', cursor: 'pointer', transition: 'all .25s',
        }}>
          {hovered ? 'Mint Ticket →' : 'View Event'}
        </button>
      </div>
    </div>
  );
};

const LiveEvents = () => {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Live', 'Music', 'DeFi', 'Gaming', 'Art & NFTs', 'Upcoming'];
  const filtered = filter === 'Live' ? EVENTS.filter(e => e.live)
    : filter === 'Upcoming' ? EVENTS.filter(e => !e.live)
    : EVENTS;

  return (
    <section id="events" style={{ padding: '72px 40px', maxWidth: 1120, margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
        <div style={{ background: 'var(--lpink)', color: 'var(--pink)', border: '1px solid rgba(244,114,182,0.3)', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, fontWeight: 600 }}>Live Now</div>
        <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 28, fontWeight: 800, color: 'var(--navy)', letterSpacing: '-0.5px' }}>Featured Events</div>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 36, flexWrap: 'wrap' }}>
        {filters.map(f => (
          <button key={f} onClick={() => setFilter(f)} style={{
            background: filter === f ? 'var(--navy)' : '#fff',
            border: `1.5px solid ${filter === f ? 'var(--navy)' : 'var(--border)'}`,
            color: filter === f ? '#fff' : 'var(--muted)',
            padding: '8px 20px', fontSize: 11, cursor: 'pointer', borderRadius: 100,
            transition: 'all .2s', fontFamily: 'DM Sans, sans-serif', fontWeight: 500,
          }}>{f}</button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
        {filtered.map(e => <EventCard key={e.id} event={e} />)}
      </div>
    </section>
  );
};

export default LiveEvents;