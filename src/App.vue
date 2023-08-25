<script>
export default {
    data() {
        return {
            tasks: [],
            task: '',
            filter: '',
        }
    },
    methods: {
        addTask() {
            this.tasks.push( {
                id: new Date().valueOf(),
                label: this.task,
                done: false,
            } );

            this.task = '';
        },
        editTask( taskId ) {
            let taskIndex = this.getTaskIndex( taskId );

            this.tasks[ taskIndex ].done = !this.tasks[ taskIndex ].done;
        },
        deleteTask( taskId ) {
            this.tasks.splice( this.getTaskIndex( taskId ) , 1 )
        },
        getTaskIndex( taskId ) {
            return this.tasks.findIndex( task => task.id === taskId );
        },
        getTasks( taskFilter ) {
            return this.tasks.filter( function( task ) {
                switch( this ) {
                    case 'pending':
                        return !task.done;

                    case 'done':
                        return task.done;

                    case 'all':
                    default:
                        return true;
                }
            }, taskFilter );
        },
        countTasks( taskFilter ) {
            return this.getTasks( taskFilter ).length;
        },
    },
}
</script>

<template>
<div class="container mt-5">
    <header>
        <h1>Vue Todo</h1>
    </header>

    <main class="card my-3">
        <div class="card-body p-5">

            <form class="d-flex mb-1">
                <input  @keydown.enter.prevent="addTask" v-model="task" type="text" class="form-control me-2" placeholder="New task..." />
                <button @click.prevent="addTask" class="btn btn-primary"><font-awesome-icon icon="fa-solid fa-plus" /></button>
            </form>

            <div class="d-flex align-items-center mt-4">
                <h4 class="flex-fill m-0">Tasks</h4>

                <ul class="nav nav-underline flex-fill justify-content-end">
                    <li class="nav-item">
                        <a @click.prevent="filter=''" :class="{ 'active': filter == '' }" class="nav-link" href="#">
                            All ({{ countTasks() }})
                        </a>
                    </li>
                    <li class="nav-item">
                        <a @click.prevent="filter='pending'" :class="{ 'active': filter == 'pending' }" class="nav-link" href="#">
                            Pending ({{ countTasks( 'pending' ) }})
                        </a>
                    </li>
                    <li class="nav-item">
                        <a @click.prevent="filter='done'" :class="{ 'active': filter == 'done' }" class="nav-link" href="#">
                            Done ({{ countTasks('done' ) }})
                        </a>
                    </li>
                </ul>
            </div>

            <div v-show="countTasks( filter ) > 0" class="list-group mt-3">
                <div v-for="task in getTasks( filter )" class="list-group-item list-group-item-action d-flex align-items-center">
                    <a @:click.prevent="editTask( task.id )" :class="[ task.done ? 'btn-outline-success' : 'btn-outline-secondary text-white' ]" class="btn btn-sm me-2">
                        <font-awesome-icon icon="fa-solid fa-check" />
                    </a>

                    <p :class="{ 'text-decoration-line-through': task.done }" class="flex-grow-1 mb-0 text-secondary">{{ task.label }}</p>

                    <a @:click.prevent="deleteTask( task.id )" class="btn btn-sm text-danger">
                        <font-awesome-icon icon="fa-solid fa-trash" />
                    </a>
                </div>
            </div>

             <p v-show="countTasks( filter ) == 0" class="mt-4 text-center">Hooray! You don't have any {{ filter }} task.</p>

        </div>
    </main>

    <footer class="text-body-secondary text-end">
        <p>Made with <a href="https://vuejs.org" target="_blank">Vue</a></p>
    </footer>
</div>
</template>
