import { useState } from 'react';
import DiscussionInput from '../components/Form/DiscussionInput';
import MessagesList from '../components/Form/MessagesList';

export default function DiscussionPage() {
  const [messages, setMessages] = useState([
    { id: 1, author: 'Fatima Z.', time: '2 heures ago', message: "Excité de voir la croissance de l'innovation numérique au Maroc, en particulier dans la préservation de notre patrimoine culturel!" },
    { id: 2, author: 'Omar B.', time: '3 hours ago', message: "Je cherche des startups dans le domaine de l'architecture qui utilisent la technologie pour restaurer des sites historiques. Avez-vous des recommandations?" },
    { id: 3, author: 'Aisha K.', time: '5 hours ago', message: "Je suis un investisseur intéressé par les initiatives de tourisme durable qui exploitent les plateformes numériques. Connectons-nous!" },
    { id: 4, author: 'Youssef L.', time: '1 day ago', message: "J'ai assisté à un excellent atelier sur le marketing numérique pour les artisans. Beaucoup de potentiel pour étendre leur portée à l'échelle mondiale!" }
  ]);

  const handleAddMessage = ({ nom, message }) => {
    const newMessage = {
      id: messages.length + 1,
      author: nom,
      time: "À l'instant",
      message
    };
    setMessages([newMessage, ...messages]);
  };

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: '#F5F1E8' }}>
      <div className="max-w-4xl mx-auto">
        <DiscussionInput onAddMessage={handleAddMessage} />
        <MessagesList messages={messages} />
      </div>
    </div>
  );
}
