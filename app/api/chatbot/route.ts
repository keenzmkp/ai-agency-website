import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();
    
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message requis' },
        { status: 400 }
      );
    }

    // Ici vous pouvez intégrer une vraie API IA
    // Par exemple, OpenAI, Anthropic, ou votre propre modèle
    
    // Simulation de réponse IA
    const responses = [
      'Je comprends votre demande. Laissez-moi vous aider avec cela.',
      'Excellente question ! Voici ce que je peux vous dire à ce sujet.',
      'Je vais analyser votre demande et vous fournir les meilleures solutions.',
      'C\'est un sujet très intéressant. Permettez-moi de vous expliquer.',
      'Je suis là pour vous accompagner dans votre projet. Que souhaitez-vous savoir ?',
      'Parfait ! Je vais vous guider étape par étape.',
      'C\'est exactement le type de projet que nous adorons réaliser !',
      'Je vais vous mettre en contact avec notre équipe d\'experts.',
    ];

    // Sélectionner une réponse aléatoire
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    // Simuler un délai de traitement
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(
      { 
        response: randomResponse,
        timestamp: new Date().toISOString()
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur lors du traitement du message:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}
