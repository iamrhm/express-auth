/**
 * @swagger
 *  components:
 *    schemas:
 *      Comment:
 *        type: object
 *        required:
 *          - content
 *        properties:
 *          post:
 *            type:post_id
 *          content:
 *            type: string
 *            description: Enter the content of the post.
 *          creator:
 *            type: user_id
 *        example:
 *            {
 *              "_id": "5e6672aba6f85b2ede9fbe2c",
 *              "post":"5e6672aba6f78yY2ede9fbe2c",
 *              "creator": "5e6676f0caea002fa6b149ae",
 *              "content": "Hello World",
 *              "__v": 0
 *            }
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      ExtendedComment:
 *        type: object
 *        required:
 *          - content
 *        properties:
 *          content:
 *            type: string
 *            description: Enter the content of the post.
 *          post:
 *            type: string
 *          creator:
 *            $ref: '#/components/schemas/BasicUser'
 *        example:
 *            {
 *              "_id": "5e6672aba6f85b2ede9fbe2c",
 *              "creator": {
 *                "_id": "5e9352ed00a1d960fe06e340",
 *                "basic_info": {
 *                  "_id": "5e9352ed00a1d960fe06e33e",
 *                  "name": "Creator101",
 *                  "email": "iamacreator.hjj@fghf.com",
 *                  "__v": 0
 *                },
 *              },
 *              "post":"5e6672aba6f78yY2ede9fbe2c",
 *              "content": "Hello World",
 *              "__v": 0
 *            }
 */
