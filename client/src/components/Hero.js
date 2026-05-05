import React from 'react';

const Hero = () => (
  <section style={{
    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32,
    alignItems: 'center', padding: '48px 36px',
    background: 'linear-gradient(135deg, #f0f4ff 0%, #fce7f3 60%, #fff1e6 100%)',
    position: 'relative', overflow: 'hidden',
  }}>
    {/* Blobs */}
    {[
      { size: 320, color: '#93c5fd', top: -80, left: -60 },
      { size: 240, color: '#f9a8d4', bottom: -60, right: '40%' },
    ].map((b, i) => (
      <div key={i} style={{
        position: 'absolute', width: b.size, height: b.size, borderRadius: '50%',
        background: b.color, filter: 'blur(60px)', opacity: 0.55, pointerEvents: 'none',
        top: b.top, left: b.left, bottom: b.bottom, right: b.right,
      }} />
    ))}

    {/* Left */}
    <div style={{ position: 'relative', zIndex: 1 }}>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        background: '#fff', border: '1px solid var(--border)',
        color: 'var(--blue)', fontSize: 10, letterSpacing: '1.5px',
        textTransform: 'uppercase', padding: '5px 14px', borderRadius: 100,
        marginBottom: 18, fontWeight: 600,
      }}>
        <div style={{ width: 6, height: 6, background: 'var(--pink)', borderRadius: '50%', animation: 'blink 1.4s infinite' }} />
        Blockchain Ticketing
      </div>

      <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(30px,4vw,52px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: -1.5, marginBottom: 14 }}>
        <div style={{ color: 'var(--navy)' }}>Events That</div>
        <div style={{ color: 'var(--blue)' }}>Live On-Chain,</div>
        <div style={{ color: 'var(--pink)' }}>Forever.</div>
      </h1>

      <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 24, maxWidth: 380 }}>
        Mint your ticket as an NFT. No fakes, no scalpers. Trade and attend with full on-chain transparency.
      </p>

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <button style={{ background: 'linear-gradient(135deg, var(--blue), var(--navy))', color: '#fff', border: 'none', padding: '12px 28px', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 12, borderRadius: 50, cursor: 'pointer', boxShadow: '0 6px 18px rgba(59,130,246,0.28)' }}>Browse Events</button>
        <button style={{ background: 'linear-gradient(135deg, var(--pink), #e879f9)', color: '#fff', border: 'none', padding: '12px 28px', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 12, borderRadius: 50, cursor: 'pointer', boxShadow: '0 6px 18px rgba(244,114,182,0.25)' }}>Host an Event</button>
      </div>
    </div>

    {/* Right */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, position: 'relative', zIndex: 1 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {[
          { num: '14K+', label: 'Events Live' },
          { num: '920K', label: 'NFTs Minted' },
          { num: '$3.1M', label: 'Volume' },
          { num: '48', label: 'Chains' },
        ].map((s, i) => (
          <div key={i} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 14, padding: '16px 18px', boxShadow: '0 2px 10px rgba(59,130,246,0.07)' }}>
            <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 24, fontWeight: 800, color: 'var(--blue)' }}>{s.num}</div>
            <div style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: 1, textTransform: 'uppercase', marginTop: 2 }}>{s.label}</div>
          </div>
        ))}
      </div>
      {[
        { icon: '🔗', bg: 'var(--sky)', title: 'Connect → Mint → Attend', sub: 'Your ticket is your NFT — tamper-proof & tradeable' },
        { icon: '🎟️', bg: 'var(--lpink)', title: 'POAP Badge on Entry', sub: 'Earn on-chain proof of attendance forever' },
      ].map((c, i) => (
        <div key={i} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 14, padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 14, boxShadow: '0 2px 10px rgba(59,130,246,0.07)' }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: c.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{c.icon}</div>
          <div>
            <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 13, fontWeight: 700, color: 'var(--navy)' }}>{c.title}</div>
            <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 2 }}>{c.sub}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Hero;