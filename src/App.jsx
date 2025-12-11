import Chatbot from "./Chatbot";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Chatbot />
      
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-brand">
          <span className="logo">JWA</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="gradient-text">JWA</span>
          </h1>
          <p className="hero-subtitle">
            Your intelligent AI assistant is here to help. Ask anything and get instant, helpful responses.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card">
            <div className="chat-bubble user">How can I help you today?</div>
            <div className="chat-bubble bot">I'm here to assist with any questions you have!</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>24/7 Support</h3>
            <p>Get instant answers anytime, anywhere. Our AI never sleeps.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>Receive responses in seconds, not minutes or hours.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Accurate Answers</h3>
            <p>Powered by advanced AI for precise and helpful responses.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure & Private</h3>
            <p>Your conversations are protected and confidential.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-content">
          <h2 className="section-title">About JWA</h2>
          <p>
            JWA is your personal AI-powered assistant designed to provide instant, 
            accurate, and helpful responses to all your questions. Whether you need 
            help with research, answers to complex questions, or just want to chat, 
            we're here for you.
          </p>
          <p>
            Simply click the chat icon in the corner to start a conversation. 
            Our AI is ready to assist you 24/7!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-text">
          Have questions? Start a conversation with our AI assistant by clicking the chat bubble!
        </p>
        <div className="contact-hint">
          <span className="pulse-dot"></span>
          <span>AI Assistant is online</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 JWA. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;