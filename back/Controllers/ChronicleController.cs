using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using EldarChronicle.Models;
using EldarChronicle.Services;

namespace EldarChronicle.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class ChronicleController : ControllerBase
  {
    public ChronicleController()
    {
    }

    [HttpGet]
    public ActionResult<List<Chronicle>> GetAll() =>
    ChronicleService.GetAll();

    [HttpGet("{id}")]
    public ActionResult<Chronicle> Get(int id)
    {
      var chronicle = ChronicleService.Get(id);

      if (chronicle == null)
        return NotFound();

      return chronicle;
    }

    [HttpPost]
    public IActionResult Create(Chronicle chronicle)
    {
      ChronicleService.Add(chronicle);
      return CreatedAtAction(nameof(Create), new { id = chronicle.Id }, chronicle);
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, Chronicle chronicle)
    {
      if (id != chronicle.Id)
        return BadRequest();

      var existingChronicle = ChronicleService.Get(id);
      if (existingChronicle is null)
        return NotFound();

      ChronicleService.Update(chronicle);

      return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
      var chronicle = ChronicleService.Get(id);

      if (chronicle is null)
        return NotFound();

      ChronicleService.Delete(id);

      return NoContent();
    }
  }
}