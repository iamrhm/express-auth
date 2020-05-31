/**
 * @swagger
 *  components:
 *    schemas:
 *      Post:
 *        type: object
 *        required:
 *          - title
 *          - content
 *        properties:
 *          title:
 *            type: string
 *            description: Enter the title of the post.
 *          comments:
 *            type: array
 *            items:
 *              type: comment_id
 *          content:
 *            type: string
 *            description: Enter the content of the post.
 *          creator:
 *            type: user_id
 *        example:
 *            {
 *              "_id": "5e6672aba6f85b2ede9fbe2c",
 *              "title": "Sample Post",
 *              "comments": ["5e6676f0caea002fa6b150bf","5e6676f0caea002fa6b149w4"],
 *              "creator": "5e6676f0caea002fa6b149ae",
 *              "content": "Hello World",
 *              "__v": 0
 *            }
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      ExtendedPost:
 *        type: object
 *        required:
 *          - title
 *          - content
 *        properties:
 *          title:
 *            type: string
 *            description: Enter the title of the post.
 *          comments:
 *            type: array
 *            items:
 *              type: comment_id
 *          content:
 *            type: string
 *            description: Enter the content of the post.
 *          creator:
 *            $ref: '#/components/schemas/BasicUser'
 *        example:
 *            {
 *              "_id": "5e6672aba6f85b2ede9fbe2c",
 *              "title": "Sample Post",
 *              "comments": ["5e6676f0caea002fa6b150bf","5e6676f0caea002fa6b149w4"],
 *              "creator": {
 *                "_id": "5e9352ed00a1d960fe06e340",
 *                "basic_info": {
 *                  "_id": "5e9352ed00a1d960fe06e33e",
 *                  "name": "Creator101",
 *                  "email": "iamacreator.hjj@fghf.com",
 *                  "__v": 0
 *                },
 *              },
 *              "content": "Hello World",
 *              "__v": 0
 *            }
 */
