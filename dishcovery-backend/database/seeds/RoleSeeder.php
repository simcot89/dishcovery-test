<?php

use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * List of user roles.
     *
     * @var array Value should be between 0 - 1.0
     */
    protected $roles = ['admin', 'editor'];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->roles as $role) \App\Role::create(['name' => $role]);
    }
}
