<?php

namespace Tests\Unit;

//use PHPUnit\Framework\TestCase;
//use Illuminate\Foundation\Testing\TestCase;
use Tests\TestCase;

class NewsTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */

    public function testing_Example(){
        //Checking to see if Asserts Work Properly
        $this->assertTrue(true);
        $this->assertEquals(50,50);
        $this->assertFalse(false);
    }

    public function test_News_API()
    //Testing HTTP GET Request to api.php 
    {
        $request = $this->get("/api/news");
        $request->assertStatus(200);
    }
}
