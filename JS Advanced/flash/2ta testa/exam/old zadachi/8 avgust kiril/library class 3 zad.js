class Library {
 
    constructor(libraryName) {
        this.libraryName = libraryName;
        this.subscribers = [];
        this.subscriptionTypes = {
            normal: this.libraryName.length,
            special: this.libraryName.length * 2,
            vip: Number.MAX_SAFE_INTEGER
        };
    }
 
    subscribe(name, type) {
 
        // Object.keys(this.subscriptionTypes).includes(type)
        if (!this.subscriptionTypes[type]) {
            throw new Error(`The type ${type} is invalid`)
        }
 
        const found = this.subscribers.find(s => s.name === name);
 
        if (!found) {
            this.subscribers.push({
                name,
                type,
                books: []
            });
        } else {
            found.type = type;
        }
        return found ? found : this.subscribers[this.subscribers.length - 1];
    }
 
    unsubscribe(name) {
        const found = this.subscribers.findIndex(s => s.name === name);
 
        if (found === -1) {
            throw new Error(`There is no such subscriber ${name}`);
        }
 
        this.subscribers.splice(found, 1);
        return this.subscribers;
    }
 
    receiveBook(subscriberName, bookTitle, bookAuthor) {
        const foundSubscriber = this.subscribers.find(s => s.name === subscriberName);
 
        if (!foundSubscriber) {
            throw new Error(`There is no such subscriber as ${subscriberName}`);
        }
 
        const subType = foundSubscriber.type;
        const booksCount = this.subscriptionTypes[subType];
 
        if (foundSubscriber.books.length >= booksCount) {
            throw new Error(`You have reached your subscription limit ${booksCount}!`);
        }
 
        foundSubscriber.books.push({title: bookTitle, author: bookAuthor});
 
        return foundSubscriber;
    }
 
    showInfo() {
        if (this.subscribers.length === 0) {
            return `${this.libraryName} has no information about any subscribers`;
        }
 
        return this.subscribers.map(s => {
            const booksOutput = s.books
                .map(b => `${b.title} by ${b.author}`)
                .join(', ');
 
            return `Subscriber: ${s.name}, Type: ${s.type}\nReceived books: ${booksOutput}`;
 
        }).join('\n');
    }
}