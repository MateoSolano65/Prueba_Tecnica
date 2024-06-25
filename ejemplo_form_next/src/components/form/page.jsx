import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function BasicExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formDocumentType">
        <Form.Label>Tipo de Documento</Form.Label>
        <Form.Select>
          <option value="cc">Cédula de Ciudadanía</option>
          <option value="ce">Cédula de Extranjería</option>
          <option value="passport">Pasaporte</option>
          <option value="other">Otro</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCedula">
        <Form.Label>Número de Documento</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese su número de documento"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo Electrónico</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingrese su correo electrónico"
        />
        <Form.Text className="text-muted">
          Nunca compartiremos su correo electrónico con nadie más.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ingrese su contraseña" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Recuérdame" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}
