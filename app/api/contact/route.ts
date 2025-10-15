import { NextRequest, NextResponse } from 'next/server';
import { ContactForm } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const body: ContactForm = await request.json();
    
    // Validation des données
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Champs requis manquants' },
        { status: 400 }
      );
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide' },
        { status: 400 }
      );
    }

    // Ici vous pouvez ajouter la logique pour envoyer l'email
    // Par exemple, avec Nodemailer, SendGrid, ou un service d'email
    
    // Simulation d'envoi d'email
    console.log('Nouveau message de contact:', {
      name: body.name,
      email: body.email,
      company: body.company,
      phone: body.phone,
      service: body.service,
      budget: body.budget,
      message: body.message,
      newsletter: body.newsletter,
      timestamp: new Date().toISOString()
    });

    // Si newsletter est coché, ajouter à la liste
    if (body.newsletter) {
      console.log('Inscription newsletter:', body.email);
    }

    return NextResponse.json(
      { message: 'Message envoyé avec succès' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}
