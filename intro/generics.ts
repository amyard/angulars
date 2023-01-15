class Queue<T> {
    private data: T[] = [];
    
    add(item: T) {
        this.data.push(item);
    }
    
    remove() {
        this.data.shift();
    }
}

const nameQueue = new Queue<string>();
nameQueue.add('asd');
nameQueue.add('aaa');

const numberQueue = new Queue<number>();
numberQueue.add(10);