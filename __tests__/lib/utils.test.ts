import {
  formatNumber,
  formatCurrency,
  formatDate,
  slugify,
  generateId,
  isValidEmail,
  isValidPhone,
  cleanPhone,
  formatPhone,
  getInitials,
  truncateText,
  capitalize,
  capitalizeWords,
} from '@/lib/utils';

describe('Utils', () => {
  describe('formatNumber', () => {
    it('formats numbers with French locale', () => {
      expect(formatNumber(1234)).toBe('1 234');
      expect(formatNumber(1234567)).toBe('1 234 567');
    });
  });

  describe('formatCurrency', () => {
    it('formats currency with French locale', () => {
      expect(formatCurrency(1234.56)).toBe('1 234,56 €');
      expect(formatCurrency(1234.56, 'USD')).toBe('1 234,56 $US');
    });
  });

  describe('formatDate', () => {
    it('formats dates with French locale', () => {
      const date = new Date('2024-01-15');
      expect(formatDate(date)).toBe('15 janvier 2024');
    });
  });

  describe('slugify', () => {
    it('creates URL-friendly slugs', () => {
      expect(slugify('Hello World')).toBe('hello-world');
      expect(slugify('Café & Cie')).toBe('cafe-cie');
      expect(slugify('  Multiple   Spaces  ')).toBe('multiple-spaces');
    });
  });

  describe('generateId', () => {
    it('generates unique IDs', () => {
      const id1 = generateId();
      const id2 = generateId();
      expect(id1).not.toBe(id2);
      expect(id1).toHaveLength(9);
    });
  });

  describe('isValidEmail', () => {
    it('validates email addresses', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('invalid-email')).toBe(false);
      expect(isValidEmail('test@')).toBe(false);
    });
  });

  describe('isValidPhone', () => {
    it('validates French phone numbers', () => {
      expect(isValidPhone('01 23 45 67 89')).toBe(true);
      expect(isValidPhone('+33 1 23 45 67 89')).toBe(true);
      expect(isValidPhone('0123456789')).toBe(true);
      expect(isValidPhone('invalid')).toBe(false);
    });
  });

  describe('cleanPhone', () => {
    it('removes formatting from phone numbers', () => {
      expect(cleanPhone('01 23 45 67 89')).toBe('0123456789');
      expect(cleanPhone('+33 1 23 45 67 89')).toBe('+33123456789');
    });
  });

  describe('formatPhone', () => {
    it('formats phone numbers', () => {
      expect(formatPhone('0123456789')).toBe('01 23 45 67 89');
      expect(formatPhone('+33123456789')).toBe('+33 1 23 45 67 89');
    });
  });

  describe('getInitials', () => {
    it('generates initials from names', () => {
      expect(getInitials('John Doe')).toBe('JD');
      expect(getInitials('Marie Dubois')).toBe('MD');
      expect(getInitials('A')).toBe('A');
    });
  });

  describe('truncateText', () => {
    it('truncates text to specified length', () => {
      expect(truncateText('Hello World', 5)).toBe('Hello...');
      expect(truncateText('Short', 10)).toBe('Short');
    });
  });

  describe('capitalize', () => {
    it('capitalizes first letter', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('HELLO')).toBe('Hello');
    });
  });

  describe('capitalizeWords', () => {
    it('capitalizes each word', () => {
      expect(capitalizeWords('hello world')).toBe('Hello World');
      expect(capitalizeWords('HELLO WORLD')).toBe('Hello World');
    });
  });
});
