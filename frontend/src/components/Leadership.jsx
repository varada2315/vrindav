import React from 'react';

const leadershipTeam = [
  {
    id: 'parikshit-ramani',
    name: 'Parikshit Ramani',
    role: 'Managing Director',
    image: '/images/team_parikshit.png',
    bio: 'Steering the strategic vision and growth of Vrindav Enterprises, ensuring operational excellence, farmer sourcing relations, and scalable processing infrastructure.'
  },
  {
    id: 'tanvi-ramani',
    name: 'Tanvi Ramani',
    role: 'CEO',
    image: '/images/team_tanvi.png',
    bio: 'Leading global export expansion, branding, B2B customer relationships, and ensuring our spice processing matches strict international quality standards.',
    objectPosition: 'top'
  }
];

const Leadership = () => {
  return (
    <section className="decor-container about-leadership-section" style={{ padding: '80px 0', backgroundColor: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#111116', marginBottom: '12px' }}>Our Leadership</h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: '#d35400', margin: '15px auto 25px auto' }}></div>
          <p style={{ color: '#55555d', maxWidth: '700px', margin: '0 auto', fontSize: '15px', textAlign: 'center', lineHeight: '1.8' }}>
            Meet the minds guiding Vrindav Enterprises towards a global footprint in pure, natural spices and quality agricultural products.
          </p>
        </div>

        <div className="leadership-grid">
          {leadershipTeam.map((member) => (
            <div key={member.id} className="leader-card">
              <div className="leader-image-wrapper">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="leader-img"
                  style={{ objectPosition: member.objectPosition || 'center' }}
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80"; // fallback placeholder
                  }}
                />
              </div>
              <div className="leader-info">
                <h3 className="leader-name">{member.name}</h3>
                <div className="leader-role">{member.role}</div>
                <p className="leader-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
