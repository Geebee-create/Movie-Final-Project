import React from 'react';
import Navbar from "./Navbar";

function AboutPage() {
    return (
        <div>
            <Navbar />
            <div className="content-container">
                <SectionHeading emoji="🥊" title="About Screen Clash" />
                <StyledBox>
                    <p>
                        <strong>Embrace the Debate:</strong> Ready to dive into the chaos? Sign up now and start exploring the world of Screen Clash, where every clash is an opportunity to make your voice heard.
                    </p>
                </StyledBox>

                <StyledBox>
                    <p>
                        Screen Clash serves as the vibrant arena where cinephiles can debate and contrast their favourite movies alongside the ones that didn't quite hit the mark. From timeless classics to the latest blockbusters, Screen Clash covers a wide range of films across various genres for your debating pleasure. No opinion is too small to share here; unleash your inner critic or simply have fun sharing your thoughts on the silver screen's most iconic matchups. At Screen Clash, we believe that every perspective adds richness to the cinematic discourse. Let’s see which movies reign supreme!
                    </p>
                </StyledBox>

                <SectionHeading emoji="🥊" title="The Screen Clash House Rules" />
                <StyledBox>
                    <ol>
                        <li>
                            <strong>Respect Others:</strong> Treat fellow users with kindness and consideration. Avoid insults, personal attacks, or any form of harassment.
                        </li>
                        <li>
                            <strong>Keep it Civil:</strong> Engage in constructive discussions and debates. Disagreements are natural but maintain a respectful tone even when you disagree with someone.
                        </li>
                        <li>
                            <strong>No Hate Speech:</strong> Do not engage in or tolerate hate speech, discrimination, or any form of bigotry. This includes language that targets individuals or groups based on race, ethnicity, gender, religion, sexual orientation, or other personal characteristics.
                        </li>
                        <li>
                            <strong>Stay on Topic:</strong> Keep discussions relevant to the movies being compared. Avoid derailing conversations with unrelated topics or spam.
                        </li>
                        <li>
                            <strong>Mind Your Language:</strong> Refrain from using profanity or offensive language. Remember that users of all ages may be participating in the discussions.
                        </li>
                        <li>
                            <strong>Respect Privacy:</strong> Do not share personal information about yourself or others. Respect the privacy of fellow users.
                        </li>
                        <li>
                            <strong>Be Open-Minded:</strong> Be open to hearing different perspectives and opinions. Approach discussions with curiosity and a willingness to learn from others.
                        </li>
                        <li>
                            <strong>No Trolling:</strong> Do not engage in trolling or intentionally disruptive behavior.
                        </li>
                    </ol>
                </StyledBox>

                <SectionHeading emoji="🥊" title="Extra Information" />
                <StyledBox>
                    <p>Screen Clash uses the TMDB API in order to source movie data and images. This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
                    {/* <img src="../components/TMDBlogo.jpeg" alt="TMDB logo" /> */}
                </StyledBox>
            </div>
        </div>
    );
}

function SectionHeading({ emoji, title }) {
    return (
        <h2 style={{ textAlign: 'center', marginTop: '2rem', marginBottom: '1rem' }}>
            <span role="img" aria-label="boxing-glove">{emoji}</span>
            <strong style={{ color: 'maroon', fontSize: '130%' }}> {title} </strong>
            <span role="img" aria-label="popcorn">🍿</span>
        </h2>
    );
}

function StyledBox({ children }) {
    return (
        <div style={{ padding: '15px', backgroundColor: '#f9f9f9', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '20px' }}>
            {children}
        </div>
    );
}

export default AboutPage;
