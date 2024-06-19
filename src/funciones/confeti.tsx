import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

interface MostrarConfetiProps {
    mostrar: boolean;
    onTerminarExplosion: () => void; // Callback para indicar que la explosión ha terminado
}

const MostrarConfeti: React.FC<MostrarConfetiProps> = ({ mostrar, onTerminarExplosion }) => {
    const [confetiVisible, setConfetiVisible] = useState<boolean>(mostrar);

    const handleTerminarExplosion = () => {
        setConfetiVisible(false);
        onTerminarExplosion();
    };

    useEffect(() => {
        let timeoutId: NodeJS.Timeout | null = null;

        if (mostrar) {
            timeoutId = setTimeout(() => {
                handleTerminarExplosion(); 
            }, 4000);
        }

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId); 
            }
        };
    }, [mostrar, onTerminarExplosion]);

    return (
        <div className={`confeti-container ${confetiVisible ? 'confeti-activo' : ''}`}>
            {confetiVisible && <Confetti width={window.innerWidth} height={window.innerHeight} />}
        </div>
    );
};

export default MostrarConfeti;
