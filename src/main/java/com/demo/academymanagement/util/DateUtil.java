package com.demo.academymanagement.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtil {

    public static Date strToDate(String time) {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date t = null;
        try {
            t = format.parse(time);
        } catch ( ParseException e) {
            e.printStackTrace();
        }
        return t;
    }
}