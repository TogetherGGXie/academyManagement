package com.demo.academymanagement.service.serviceImpl;

import com.demo.academymanagement.modal.Comment;
import com.demo.academymanagement.mapper.CommentMapper;
import com.demo.academymanagement.service.CommentService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-01
 */
@Service
public class CommentServiceImpl extends ServiceImpl<CommentMapper, Comment> implements CommentService {

}
