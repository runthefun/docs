export const QuickstartInterface = ({onSelect}) => {
    const examplePrompts = [
      { icon: '🪙', text: 'Make something spin', prompt: 'How can I make a component spin continuously in my oncyber scene?' },
      { icon: '👾', text: 'Make audio play within area', prompt: 'How can I make an audio clip play when a player enters a specific area?' },
      { icon: '🏁', text: 'Run faster', prompt: "How can I change the player's running speed?" },
      { icon: '💡', text: "I'm feeling lucky", prompt: 'Give me a random but cool thing I can make with oncyber.' },
    ];
  
    return (
      <div className="container">
        <h1>You'll be in awe</h1>
        <div className="logo">
        <video
            style={{ margin: "0 auto", padding: '1rem' }}
            width="630"
            height="300"
            src="https://res.cloudinary.com/ugc-oo-oo/video/upload/c_crop,w_1852/v1735952928/intro_video2_by1s0o.mp4"
            muted
            loop
            autoPlay
        />
        <p>We made this GPT to help with scripting questions, it's very much a wip, don't always trust what it says, join our <a href="https://discord.gg/3dEQXmAXnv" target="_blank">discord</a></p>
        </div>
        <div className="prompt-grid">
          {examplePrompts.map((prompt, index) => (
            <div key={index} className="prompt-box" onClick={() => onSelect(prompt)}>
              <span className="prompt-icon">{prompt.icon}</span>
              <p className="prompt-text">{prompt.text}</p>
            </div>
          ))}
        </div>
  
        <style jsx>{`
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            // min-height: 100vh;
            // background-color: #f3f4f6;
            padding: 1rem;
          }

          h1 {
            font-size: 32px;
            margin-bottom: 12px;
            font-weight: 600;
            font-style: italic;
          }

          p {
            font-size: 16px;
            text-align: center;
            max-width: 600px;
            margin: 0 auto;
            opacity: 0.8;
          }

          .logo {
            display: flex;
            justify-content: center;
            flex-direction: column;
            margin-bottom: 1.5rem;
            img {
              width: 250px;
            }
          }
          .prompt-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            max-width: 800px;
            width: 100%;
          }
          @media (min-width: 640px) {
            .prompt-grid {
              grid-template-columns: repeat(4, 1fr);
            }
          }
          .prompt-box {
            background-color: white;
            padding: 1rem;
            border-radius: 0.5rem;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
            cursor: pointer;
            transition: box-shadow 0.3s ease;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .prompt-box:hover {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }
          a {
            color: black;
            cursor: pointer;
            text-decoration: underline;
          }
          .prompt-icon {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
          }
          .prompt-text {
            font-size: 0.875rem;
            color: #4b5563;
          }
        `}</style>
      </div>
    );
  };
