/**
 * @swagger
 * tags:
 *   name: Post
 *   description: Post management
 */

/**
 * @swagger
 * path:
 *  /post/:
 *    get:
 *      summary: Get all posts
 *      tags: [Post]
 *      responses:
 *        "200":
 *          description: List of posts
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Post'
 */

/**
 * @swagger
 * path:
 *  /post/:
 *    post:
 *      summary: Create new post
 *      tags: [Post]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Post'
 *      responses:
 *        "200":
 *          description: Created post model
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Post'
 */

/**
 * @swagger
 * path:
 *  /post/{postId}:
 *    get:
 *      summary: Get a post by id
 *      tags: [Post]
 *      parameters:
 *        - in: path
 *          name: postId
 *          schema:
 *            type: string
 *          required: true
 *          description: Id of the post
 *      responses:
 *        "200":
 *          description: A post object
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ExtendedPost'
 */

/**
 * @swagger
 * path:
 *  /post/{postId}:
 *    delete:
 *      summary: Delete a post
 *      tags: [Post]
 *      parameters:
 *        - in: path
 *          name: postId
 *          schema:
 *            type: string
 *          required: true
 *          description: Id of the post
 *      responses:
 *        "200":
 *          description: Delete confirmation message
 *          content:
 *            application/json:
 */
