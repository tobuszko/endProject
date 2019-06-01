package pl.wszib.edu.pl.project.endProject.DAO;

import org.springframework.data.repository.CrudRepository;
import pl.wszib.edu.pl.project.endProject.Model.User;

public interface UserDAO extends CrudRepository<User, Integer> {



}
