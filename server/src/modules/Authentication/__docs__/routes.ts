/**
 * @swagger
 * tags:
 *   name: Authorization
 *   description: Authorization routes
 */

/**
 * @swagger
 * path:
 *  /auth/register:
 *    post:
 *      summary: Register new user
 *      tags: [Authorization]
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/RegistrationInfo'
 *      responses:
 *        "200":
 *          description: User registered and logged in successfully
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Tokens'
 */

/**
 * @swagger
 * path:
 *  /auth/login:
 *    post:
 *      summary: Login user
 *      tags: [Authorization]
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/LoginInfo'
 *      responses:
 *        "200":
 *          description: User logged in successfully
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Tokens'
 */

/**
 * @swagger
 * path:
 *  /auth/logout:
 *    delete:
 *      summary: Logout user
 *      tags: [Authorization]
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        "200":
 *          description: User logged out successfully
 */

/**
 * @swagger
 * path:
 *  /auth/token:
 *    put:
 *      summary: Get updated token
 *      tags: [Authorization]
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        "200":
 *          description: Updated tokens
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Tokens'
 */
