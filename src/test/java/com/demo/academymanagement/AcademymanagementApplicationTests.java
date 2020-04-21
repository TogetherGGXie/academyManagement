package com.demo.academymanagement;

import com.demo.academymanagement.service.CommentTimeService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.text.ParsePosition;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Date;

@SpringBootTest
class AcademymanagementApplicationTests {

    @Autowired
    private CommentTimeService commentTimeService;
    @Test
    void contextLoads() {
//        String startTime = "2020-04-18 13:53:53";
//        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//        ParsePosition pp = new ParsePosition( 0 );
//        Date sTime = sdf.parse(startTime,pp);
//        System.out.println(commentTimeService.getCommentTime());
        String dateStr= "2018-06-20 11:25:56";
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        LocalDateTime localDateTime = LocalDateTime.parse(dateStr, dateTimeFormatter);
        ZoneId zone = ZoneId.systemDefault();
        Instant instant = localDateTime.atZone(zone).toInstant();
        Date date = Date.from(instant);

        System.out.println(date);
    }
}
