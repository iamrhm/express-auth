/**
 * @swagger
 * tags:
 *   name: Comment
 *   description: Comment management
 */

/**
 * @swagger
 * path:
 *  /comment/:
 *    get:
 *      summary: Get all comments
 *      tags: [Comment]
 *      responses:
 *        "200":
 *          description: List of comments
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Comment'
 */

/**
 * @swagger
 * path:
 *  /comments/:
 *    comments:
 *      summary: Create new comments
 *      tags: [Comment]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Comment'
 *      responses:
 *        "200":
 *          description: Created comment model
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Comment'
 */

/**
 * @swagger
 * path:
 *  /comment/{commentId}:
 *    get:
 *      summary: Get a comment by id
 *      tags: [Comment]
 *      parameters:
 *        - in: path
 *          name: commentId
 *          schema:
 *            type: string
 *          required: true
 *          description: Id of the Comment
 *      responses:
 *        "200":
 *          description: A Comment object
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ExtendedComment'
 */

/**
 * @swagger
 * path:
 *  /comment/{commentId}:
 *    delete:
 *      summary: Delete a Comment
 *      tags: [Comment]
 *      parameters:
 *        - in: path
 *          name: commentId
 *          schema:
 *            type: string
 *          required: true
 *          description: Id of the Comment
 *      responses:
 *        "200":
 *          description: Delete confirmation message
 *          content:
 *            application/json:
 */
