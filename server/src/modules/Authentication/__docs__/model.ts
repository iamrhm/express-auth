/**
 * @swagger
 *  components:
 *    securitySchemes:
 *      bearerAuth:
 *        type: http
 *        scheme: bearer
 *        bearerFormat: Bearer
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      LoginInfo:
 *        type: object
 *        required:
 *          - email
 *          - password
 *        properties:
 *          email:
 *            type: string
 *          password:
 *            type: string
 *        example:
 *          {
 *            "email": "iamacreator.hjj@fghf.com",
 *            "password": "plschange",
 *          }
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      RegistrationInfo:
 *        type: object
 *        required:
 *          - email
 *          - phonenumber
 *          - name
 *          - password
 *        properties:
 *          name:
 *            type: string
 *            description: Enter the  name of the user
 *          email:
 *            type: string
 *            description: Enter the email id of the user
 *          password:
 *            type: string
 *            description: Enter the  password of the user
 *          avatar:
 *            type: string
 *        example:
 *          {
 *            "_id": "5e6b75efa0e0d0dc8c448a92",
 *            "email": "rahulmitra980@gmail.com",
 *            "name": "Rahul Mitra",
 *            "password": "pass1234",
 *            "__v": 0
 *          }
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      Tokens:
 *        type: object
 *        properties:
 *          auth:
 *            type: boolean
 *          accessToken:
 *            type: string
 *          refreshToken:
 *            type: string
 *          message:
 *            type: string
 *        example:
 *          {
 *            "auth": "true",
 *            "message": "User registered and logged in successfully",
 *          }
 */
