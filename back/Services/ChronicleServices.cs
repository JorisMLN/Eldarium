using EldarChronicle.Models;
using System.Collections.Generic;
using System.Linq;

namespace EldarChronicle.Services
{
  public static class ChronicleService
  {
    static List<Chronicle> Chronicles { get; }
    static int nextId = 3;
    static ChronicleService()
    {
      Chronicles = new List<Chronicle>
      {
        new Chronicle { Id = 1, Name = "Le refuge", Season = 1, Text="ablabalbalabalbalbalba" },
        new Chronicle { Id = 2, Name = "Urzil des Cretes Sanglantes", Season = 1, Text="ablabalbalabalbalbalba" }
      };
    }

    public static List<Chronicle> GetAll() => Chronicles;

    public static Chronicle Get(int id) => Chronicles.FirstOrDefault(p => p.Id == id);

    public static void Add(Chronicle chronicle)
    {
      chronicle.Id = nextId++;
      Chronicles.Add(chronicle);
    }

    public static void Delete(int id)
    {
      var Chronicle = Get(id);
      if (Chronicle is null)
        return;

      Chronicles.Remove(Chronicle);
    }

    public static void Update(Chronicle Chronicle)
    {
      var index = Chronicles.FindIndex(p => p.Id == Chronicle.Id);
      if (index == -1)
        return;

      Chronicles[index] = Chronicle;
    }
  }
}