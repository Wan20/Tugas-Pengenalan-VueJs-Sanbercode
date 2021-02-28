Vue.component('comment-template', {
    props: ['comment'],
    template: `
        <li>
            <button @click="upVote">+</button><br>
            {{ comment.comment }} || {{ comment.tgl }} || Score : {{ votes }}<br>
            <button @click="downVote">-</button>
            <br><br>
        </li>
    `,
    data() {
        return {
        upVoted: false,
        downVoted: false
        }
    },
    methods: {
        upVote() {
            this.upVoted = !this.upVoted;
            this.downVoted = false;
        },
        downVote() {
            this.downVoted = !this.downVoted;
            this.upVoted = false;
        }
    },
    computed: {
        votes() {
            if(this.upVoted) {
                return this.comment.vote + 1;
            }
            else if(this.downVoted) {
                return this.comment.vote - 1;
            }
            else {
                return this.comment.vote;
            }
        }
    }
});

var vm = new Vue({
    el: '#app',
    data: {
        textarea: '',
        listComment: [
            { comment: 'komentar 1 komentar 1 komentar 1', tgl: '29-07-2020', vote: 0 },
            { comment: 'komentar 2 komentar 2 komentar 2', tgl: '28-07-2020', vote: 5 },
            { comment: 'komentar 3 komentar 3 komentar 3', tgl: '27-07-2020', vote: 5 }
        ],
        styleUl: 'list-style-type: none;'
    },
    methods: {
        addComment() {
            this.listComment.push(
                {
                    comment: this.textarea,
                    tgl: '29-07-2020',
                    vote: 0,
                    scoreNow: 0
                }
            );
            this.textarea = '';
        }
    }
})