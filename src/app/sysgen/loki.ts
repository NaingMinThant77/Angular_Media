export class Loki {
    static save(data: any) {
        localStorage.setItem('token', data)
    }

    static authCheck() {
        let data = localStorage.getItem('token');
        if (data != null && data != undefined) {
            return true;
        }
        return false;
    }

    static get() {
        return typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;
    }

    static remove() {
        return localStorage.removeItem('token')
    }
}