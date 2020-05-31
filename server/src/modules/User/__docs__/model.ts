/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *            - basic_info
 *        properties:
 *          basic_info:
 *            type: BasicInfo
 *          creator_info:
 *            type: CreatorInfo
 *        example:
 *          {
 *            "_id": "5e9352ed00a1d960fe06e340",
 *            "basic_info": {
 *              "_id": "5e9352ed00a1d960fe06e33e",
 *              "name": "Creator101",
 *              "email": "iamacreator.hjj@fghf.com",
 *              "password": "plschange",
 *              "__v": 0
 *            },
 *          }
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      BasicUser:
 *        type: object
 *        required:
 *            - basic_info
 *        properties:
 *          _id:
 *            type: string
 *          basic_info:
 *            $ref: '#/components/schemas/BasicUserInfo'
 *        example:
 *          {
 *            "_id": "5e9352ed00a1d960fe06e340",
 *            "basic_info": {
 *              "_id": "5e9352ed00a1d960fe06e33e",
 *              "name": "Creator101",
 *              "email": "iamacreator.hjj@fghf.com",
 *              "__v": 0
 *            },
 *          }
 */
