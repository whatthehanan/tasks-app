import { hash as hashPassword, compare as comparePassword } from 'bcrypt';
import { sign as signToken, verify as verifyToken } from 'jsonwebtoken';

class UtilService {
  private static instance: UtilService;
  private saltingRounds: number;

  private constructor() {
    this.saltingRounds = parseInt(process.env.SALTING_ROUNDS || '10', 2); // get this value from config?
  }

  public static getInstance(): UtilService {
    if (!UtilService.instance) {
      UtilService.instance = new UtilService();
    }

    return UtilService.instance;
  }

  /**
   * Creates a hash for a given string
   * @param {string} password - password to hash
   * @returns {string} hashedPassword string - hashed password
   */
  async generatePassword(password: string): Promise<string> {
    return await hashPassword(password, this.saltingRounds);
  }

  /**
   *
   * @param {string} password - user entered password
   * @param {string} hashedPassword - hashed password from database
   * @returns {boolean} isEqual - if the two passwords are equal
   */
  async verifyPassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await comparePassword(password, hashedPassword);
  }

  /**
   * Creates a jwt token from a given object or string
   * @param {object | string} payload - data to encrypt into token
   * @returns {string} token - signedToken
   */
  async createJwtToken(payload: object | string): Promise<string> {
    return signToken(payload, String(process.env.JWT_SECRET), {
      expiresIn: '2d',
    });
  }

  /**
   * Verify if a provided token is valid or not
   * @param token - token to verify
   * @returns {isValid: boolean, decoded: string | object | null}
   */
  async verifyJwtToken(
    token: string,
  ): Promise<{ isValid: boolean; decoded: object | string | null }> {
    try {
      const decoded = await verifyToken(token, String(process.env.JWT_SECRET));
      return {
        isValid: true,
        decoded,
      };
    } catch (err) {
      return {
        isValid: false,
        decoded: null,
      };
    }
  }
}

export default UtilService.getInstance();
