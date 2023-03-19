class Comment {
    constructor(id, text, createdAt, author) {
      this._id = id;
      this.text = text;
      this._createdAt = createdAt;
      this._author = author;
    }
  
    get id() {
      return this._id;
    }
  
    set id(new_id) {
      console.log('Can not change comment id');
    }
  
    get createdAt() {
      return this._createdAt;
    }
  
    set createdAt(new_createdAt) {
      console.log('Can not change date');
    }
  
    get author() {
      return this._author;
    }
  
    set author(new_author) {
      throw new Error('Can not change author');
    }
  
    static validate(comment) {
        const requiredFields = ["id", "text", "createdAt", "author"];

        if (!requiredFields.every((field) => comment.hasOwnProperty(field))) {
          console.log("INVALID COMMENT");
          return false;
        }
    
        if (typeof comment.id !== "string") {
          console.log("INVALID COMMENT ID");
          return false;
        }
    
        if (typeof comment.text !== "string" || comment.text.length > 280) {
          console.log("INVALID COMMIT TEXT");
          return false;
        }
    
        if (!(comment.createdAt instanceof Date)) {
          console.log("INVALID COMMENT DATE");
          return false;
        }
    
        if (typeof comment.author !== "string") {
          console.log("INVALID COMMENT AUTHOR");
          return false;
        }
    
        return true;
    }
  }
  