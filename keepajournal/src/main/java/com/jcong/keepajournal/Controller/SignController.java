package com.jcong.keepajournal.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SignController {

    @GetMapping("/api/handleSignIn")
    public String handleSignIn(String id, String pw) {
        System.out.println("id : " + id);
        System.out.println("pw : " + pw);

        if(id.equals("aaa")) {
            if(pw.equals("bbb")) {
                System.out.println("success !!");
                return "Y";
            } else {
                System.out.println("pw invalid");
                return "N";
            }
        } else {
            System.out.println("id invalid");
            return "N";
        }
    }
}
