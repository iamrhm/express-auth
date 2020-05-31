/**
 * @swagger
 *  components:
 *    schemas:
 *      BasicUserInfo:
 *        type: object
 *        required:
 *          - email
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
 *          posts:
 *            type: array
 *            items: post_id
 *          comment:
 *            type: array
 *            items: comment_id
 *        example:
 *          {
 *            "_id": "5e6b75efa0e0d0dc8c448a92",
 *            "email": "rahulmitra980@gmail.com",
 *            "name": "Rahul Mitra",
 *            "password": "pass1234",
 *            "posts": [''],
 *            "comments":[''],
 *            "__v": 0
 *          }
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      BasicInfo:
 *        type: object
 *        required:
 *          - email
 *          - name
 *          - password
 *        properties:
 *          name:
 *            type: string
 *            description: Enter the  name of the user
 *          email:
 *            type: string
 *            description: Enter the email id of the user
 *          avatar:
 *            type: string
 *        example:
 *          {
 *            "_id": "5e6b75efa0e0d0dc8c448a92",
 *            "email": "rahulmitra980@gmail.com",
 *            "name": "Rahul Mitra",
 *            "posts": [''],
 *            "comments": [''],
 *            "__v": 0
 *          }
 */
