import React, { useState } from 'react';

function Page() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('geb.company');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  return (
    <>
      <div className='doc-content'>
        <h1>Minecraft SMP</h1>
        <p>
          Whitelisted Survival Multiplayer. contact to be whitelisted!
        </p>
        <h2>Connection</h2>
        <div style={{margin: '1rem'}}>
          <h4>IP:</h4>
          <span className="ibm-plex-mono-regular" onClick={copyToClipboard} style={{cursor: 'pointer', textDecoration: 'underline'}}>
            smp.geb.company
          </span>
          {copied && <span className="fade-out"> (copied)</span>}
        </div>

        <div style={{margin: '1rem'}}>
          <h4>Version: </h4>
          1.21.1
        </div>
      </div>
      <style jsx>{`
        .fade-out {
          animation: fadeOut 2s forwards;
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}

export default Page;