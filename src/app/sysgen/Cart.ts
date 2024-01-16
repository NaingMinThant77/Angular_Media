export class Cart {

    static db = 'cartdb';

    static getDBItems() {
        const items = localStorage.getItem(this.db);
        if (items == null) {
            return [];
        } else {
            return JSON.parse(items);
        }
    }

    static saveDBItem(product: any) {
        let items = this.getDBItems();
        let ind = items.findIndex((item: { _id: any; }) => item._id == product._id); // 1 or -1
        if (ind == -1) {
            product['count'] = 1;
            items.push(product);
        } else {
            let pro = items[ind];
            pro.count = pro.count + 1;
        }
        console.log(items);
        localStorage.removeItem(this.db);
        localStorage.setItem(this.db, JSON.stringify(items));
    }

    static reduce(product: { _id: any; }, num: any) {
        let items = this.getDBItems();
        let ind = items.findIndex((item: { _id: any; }) => item._id == product._id);
        if (ind != -1) {
            let pro = items[ind];
            pro.count = pro.count + num;
        }
        localStorage.removeItem(this.db);
        localStorage.setItem(this.db, JSON.stringify(items));
    }

    static deleteProduct(product: { _id: any; }) {
        let items = this.getDBItems();
        let ind = items.findIndex((item: { _id: any; }) => item._id == product._id);
        if (ind != -1) {
            //delete for one
            items.splice(ind, 1);
        }
        localStorage.removeItem(this.db);
        localStorage.setItem(this.db, JSON.stringify(items));
    }

    static resetDB() {
        localStorage.removeItem(this.db);
    }
}