<?php

namespace App\Http\Controllers;

use App\Models\TodoList;
use Illuminate\Http\Request;

class TodoListController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $todo_lists = TodoList::all();
            return response()->json($todo_lists, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $todo_lists = new TodoList();
            $todo_lists->name = $request->name;
            $todo_lists->description = $request->description;
            $todo_lists->date = $request->date;
            $todo_lists->save();
            // dd($request->name);
            // TodoList::create($request->all());
            return response()->json(['message' => 'Tarefa criada com sucesso'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Erro ao criar tarefa' .$e->getMessage()], 500);
        }
        return response()->json(['message' => 'Vou salvar os dados'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TodoList  $todoList
     * @return \Illuminate\Http\Response
     */
    public function show(TodoList $todoList)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TodoList  $todoList
     * @return \Illuminate\Http\Response
     */
    public function edit(TodoList $todoList)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TodoList  $todoList
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $todo_lists = TodoList::find($id);
            $todo_lists->name = $request->name;
            $todo_lists->description = $request->description;
            $todo_lists->date = $request->date;
            $todo_lists->save();
            return response()->json(['message' => 'Task updated successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TodoList  $todoList
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $todo_list = TodoList::find($id);
            $todo_list->delete();
            return response()->json(['message' => 'Task deleted successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
