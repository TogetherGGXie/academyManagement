package com.demo.academymanagement.mapper;

import com.baomidou.mybatisplus.plugins.pagination.Pagination;
import com.demo.academymanagement.modal.Booking;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;

import java.util.HashMap;
import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-24
 */
public interface BookingMapper extends BaseMapper<Booking> {
    @Select("select booking.meeting_id, booking.room_id, booking.user_id," +
            " booking.start_time, booking.end_time, meeting_room.name " +
            "from booking left join meeting_room on booking.room_id = meeting_room.room_id " +
            "where booking.user_id = #{userId} and booking.status = 1")
    @Results(id="bookingHistory",value={
            @Result(property = "meetingId", column = "meeting_id"),
            @Result(property = "roomId", column = "room_id"),
            @Result(property = "userId", column = "user_id"),
            @Result(property = "startTime", column = "start_time"),
            @Result(property = "endTime", column = "end_time"),
            @Result(property = "name", column = "name"),
    })
    List<HashMap<String, Object>> getMyBooking(Pagination pagination, @Param("userId") Integer userId);
}
