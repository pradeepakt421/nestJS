import { Controller , Get} from '@nestjs/common';

@Controller('student')
export class StudentController {

    @Get()
    getAllStudents(){
        return "All students..."
    }
}
