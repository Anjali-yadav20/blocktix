import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
        setWalletConnected(true);
      } catch (err) {
        console.error('Rejected');
      }
    } else {
      alert('Please install MetaMask.');
    }
  };

  const short = (a) => `${a.slice(0, 6)}...${a.slice(-4)}`;

  return (
    <nav style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '16px 40px',
      background: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.85)',
      backdropFilter: 'blur(14px)',
      borderBottom: '1px solid var(--border)',
      position: 'sticky', top: 0, zIndex: 100,
      boxShadow: '0 2px 16px rgba(59,130,246,0.07)',
      transition: 'background 0.3s',
    }}>
      {/* Logo */}
      <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 22, letterSpacing: '-0.5px', color: 'var(--navy)' }}>
        Block<span style={{ color: 'var(--pink)' }}>tix</span>
        <em style={{ fontStyle: 'normal', fontSize: 9, color: 'var(--blue)', letterSpacing: 2, fontFamily: 'DM Sans, sans-serif', verticalAlign: 'middle', marginLeft: 6, background: 'var(--sky)', padding: '2px 8px', borderRadius: 100 }}>WEB3</em>
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: 28 }}>
        {['Events', 'Marketplace', 'Create', 'Docs'].map(l => (
          <a key={l} href={`#${l.toLowerCase()}`}
            style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: 13, fontWeight: 500, transition: 'color .2s' }}
            onMouseEnter={e => e.target.style.color = 'var(--blue)'}
            onMouseLeave={e => e.target.style.color = 'var(--muted)'}
          >{l}</a>
        ))}
      </div>

      {/* Wallet */}
      <button onClick={connectWallet} style={{
        background: 'linear-gradient(135deg, var(--blue), var(--navy))',
        color: '#fff', border: 'none', padding: '10px 24px',
        fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 12,
        cursor: 'pointer', borderRadius: 50,
        boxShadow: '0 4px 14px rgba(59,130,246,0.35)', transition: 'all .2s',
      }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 22px rgba(59,130,246,0.45)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(59,130,246,0.35)'; }}
      >
        {walletConnected ? short(walletAddress) : 'Connect Wallet'}
      </button>
    </nav>
  );
};

export default Navbar;