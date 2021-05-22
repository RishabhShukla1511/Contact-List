var app = new Vue({
    el: "#app",
    data: {
        Name: '',
        email: '',
        photo: '',
        contactnum: '',
        contacts: []
    },
    methods: {
        addEntry: function () {
            if (this.Name == '')
                alert('Please fill out the Name');
            else if (this.contactnum == '')
                alert('Please fill out the Phone Number');
            else {
                this.contacts.push({ Name: this.Name, email: this.email, photo: this.photo, contactnum: this.contactnum });
                this.Name = '';
                this.email = '';
                this.photo = '';
                this.contactnum = '';
            }
        },
        removeEntry(contactobj) {
            this.contacts = this.contacts.filter((obj) => {
                return obj !== contactobj;
            })
        }
    }
})