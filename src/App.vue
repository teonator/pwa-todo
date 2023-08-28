<script>
import TodoFilter from './components/TodoFilter.vue'
import TodoTask from './components/TodoTask.vue'

export default {
    components: {
        TodoFilter,
        TodoTask,
    },
    data() {
        return {
            tasks: [],
            task: '',
            active: '',
            error: '',
        }
    },
    methods: {
        addTask() {
            this.error = '';

            if( this.validateTask( this.task ) ) {
                this.tasks.push( {
                    id: new Date().valueOf(),
                    label: this.task,
                    done: false,
                } );

                this.task = '';
            }
            else {
                this.error = 'Please enter the task.';
            }
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
        validateTask( task ) {
            return task.length > 0;
        },
        test( a ) {
            console.log(a);
        }
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
                <input  @keydown.enter.prevent="addTask" v-model="task" :class="{ 'is-invalid': error.length }" type="text" class="form-control me-2" placeholder="New task..." />
                <button @click.prevent="addTask" class="btn btn-primary"><font-awesome-icon icon="fa-solid fa-plus" /></button>
            </form>

            <div v-show="error.length">
                <span class="text-danger">{{ error }}</span>0ip[jk23qweop8a7u;/l]
            </div>

            <div class="d-flex align-items-center mt-4">
                <h4 class="flex-fill m-0">Tasks</h4>

                <ul class="nav nav-underline flex-fill justify-content-end">
                    <TodoFilter v-for="item in [ 'all', 'pending', 'done' ]" :type="item" @filter="active = $event" :counter="countTasks" :active=active />
                </ul>
            </div>

            <div v-show="countTasks( active )" class="list-group mt-3">
                <TodoTask v-for="item in getTasks( active )" :task="item" @edit="editTask( $event )" @delete="deleteTask( $event )" />
            </div>

             <p v-show="!countTasks( active )" class="mt-4 text-center">Hooray! You don't have any {{ filter }} task.</p>

        </div>
    </main>

    <footer class="text-body-secondary text-end">
        <p>Made with <a href="https://vuejs.org" target="_blank">Vue</a></p>
    </footer>
</div>
</template>
