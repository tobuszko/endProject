package pl.wszib.edu.pl.project.endProject.DAO;

import org.springframework.data.repository.CrudRepository;
import pl.wszib.edu.pl.project.endProject.Model.User;

import java.util.ArrayList;
import java.util.List;

public interface UserDAO extends CrudRepository<User, Integer> {


}
